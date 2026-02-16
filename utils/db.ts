import { supabase } from './supabaseClient';
import { CaseStudy, Testimonial } from '../types';

// --- MAPPING HELPERS ---

// Converte do formato do Banco (snake_case) para o App (camelCase)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapCaseFromDB = (data: any): CaseStudy => ({
  id: data.id,
  title: data.title,
  client: data.client,
  year: data.year,
  coverUrl: data.cover_url || '',
  category: data.category,
  industry: data.industry,
  location: data.location,
  description: data.description,
  challenge: data.challenge,
  category_en: data.category_en,
  industry_en: data.industry_en,
  location_en: data.location_en,
  description_en: data.description_en,
  challenge_en: data.challenge_en,
  blocks: Array.isArray(data.blocks) ? data.blocks : [],
  order: data.sort_order // Mapeia de volta para 'order'
});

// Converte do formato do App (camelCase) para o Banco (snake_case)
export const mapCaseToDB = (data: CaseStudy) => {
  return {
    id: data.id,
    title: data.title,
    client: data.client,
    year: data.year,
    cover_url: data.coverUrl,
    category: data.category,
    industry: data.industry,
    location: data.location,
    description: data.description,
    challenge: data.challenge,
    category_en: data.category_en,
    industry_en: data.industry_en,
    location_en: data.location_en,
    description_en: data.description_en,
    challenge_en: data.challenge_en,
    blocks: data.blocks, 
    sort_order: data.order // Salva em 'sort_order'
  };
};

// --- CASES (PROJETOS) ---

export const loadCasesFromDB = async (): Promise<CaseStudy[] | null> => {
  try {
    const { data, error } = await supabase
      .from('cases')
      .select('*')
      .order('sort_order', { ascending: true });

    if (error) {
      console.error("Supabase Load Error (Cases):", error.message);
      return null;
    }
    
    return (data || []).map(mapCaseFromDB);
  } catch (error) {
    console.error("Connection Error (Cases):", error);
    return null;
  }
};

// Mantemos por compatibilidade, mas o Admin usará inserção direta
export const saveCasesToDB = async (cases: CaseStudy[]): Promise<void> => {
  // Implementação simplificada ou deprecated se movermos tudo para o Admin
  // Mas mantendo para garantir compatibilidade de tipos se necessário
  return;
};

// --- TESTIMONIALS (DEPOIMENTOS) ---

export const loadTestimonialsFromDB = async (): Promise<Testimonial[] | null> => {
  try {
    const { data, error } = await supabase.from('testimonials').select('*');
    if (error) {
        console.error("Load Testimonials Error:", error.message);
        return null;
    }
    return data as Testimonial[];
  } catch (error) {
    return null;
  }
};

export const saveTestimonialsToDB = async (testimonials: Testimonial[]): Promise<void> => {
   return;
};