export class searchquery {
  constructor(
    public start: number,
    public q: string,
    public offset: string,
    public num_found: number,
    public numFoundExact: number,
    public numFound: number,
    // public docs: any,
    public documentation_url: string
  ) {}
}
