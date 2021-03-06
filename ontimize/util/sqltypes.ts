export class SQLTypes {
  /**
   * <P>The constant in the Java programming language, sometimes referred
   * to as a type code, that identifies the generic SQL type
   * <code>BIT</code>.
   */
  public static BIT = -7;

  /**
   * <P>The constant in the Java programming language, sometimes referred
   * to as a type code, that identifies the generic SQL type
   * <code>TINYINT</code>.
   */
  public static TINYINT = -6;

  /**
   * <P>The constant in the Java programming language, sometimes referred
   * to as a type code, that identifies the generic SQL type
   * <code>SMALLINT</code>.
   */
  public static SMALLINT = 5;

  /**
   * <P>The constant in the Java programming language, sometimes referred
   * to as a type code, that identifies the generic SQL type
   * <code>INTEGER</code>.
   */
  public static INTEGER = 4;

  /**
   * <P>The constant in the Java programming language, sometimes referred
   * to as a type code, that identifies the generic SQL type
   * <code>BIGINT</code>.
   */
  public static BIGINT = -5;

  /**
   * <P>The constant in the Java programming language, sometimes referred
   * to as a type code, that identifies the generic SQL type
   * <code>FLOAT</code>.
   */
  public static FLOAT = 6;

  /**
   * <P>The constant in the Java programming language, sometimes referred
   * to as a type code, that identifies the generic SQL type
   * <code>REAL</code>.
   */
  public static REAL = 7;


  /**
   * <P>The constant in the Java programming language, sometimes referred
   * to as a type code, that identifies the generic SQL type
   * <code>DOUBLE</code>.
   */
  public static DOUBLE = 8;

  /**
   * <P>The constant in the Java programming language, sometimes referred
   * to as a type code, that identifies the generic SQL type
   * <code>NUMERIC</code>.
   */
  public static NUMERIC = 2;

  /**
   * <P>The constant in the Java programming language, sometimes referred
   * to as a type code, that identifies the generic SQL type
   * <code>DECIMAL</code>.
   */
  public static DECIMAL = 3;

  /**
   * <P>The constant in the Java programming language, sometimes referred
   * to as a type code, that identifies the generic SQL type
   * <code>CHAR</code>.
   */
  public static CHAR = 1;

  /**
   * <P>The constant in the Java programming language, sometimes referred
   * to as a type code, that identifies the generic SQL type
   * <code>VARCHAR</code>.
   */
  public static VARCHAR = 12;

  /**
   * <P>The constant in the Java programming language, sometimes referred
   * to as a type code, that identifies the generic SQL type
   * <code>LONGVARCHAR</code>.
   */
  public static LONGVARCHAR = -1;


  /**
   * <P>The constant in the Java programming language, sometimes referred
   * to as a type code, that identifies the generic SQL type
   * <code>DATE</code>.
   */
  public static DATE = 91;

  /**
   * <P>The constant in the Java programming language, sometimes referred
   * to as a type code, that identifies the generic SQL type
   * <code>TIME</code>.
   */
  public static TIME = 92;

  /**
   * <P>The constant in the Java programming language, sometimes referred
   * to as a type code, that identifies the generic SQL type
   * <code>TIMESTAMP</code>.
   */
  public static TIMESTAMP = 93;


  /**
   * <P>The constant in the Java programming language, sometimes referred
   * to as a type code, that identifies the generic SQL type
   * <code>BINARY</code>.
   */
  public static BINARY = -2;

  /**
   * <P>The constant in the Java programming language, sometimes referred
   * to as a type code, that identifies the generic SQL type
   * <code>VARBINARY</code>.
   */
  public static VARBINARY = -3;

  /**
   * <P>The constant in the Java programming language, sometimes referred
   * to as a type code, that identifies the generic SQL type
   * <code>LONGVARBINARY</code>.
   */
  public static LONGVARBINARY = -4;

  /**
   * <P>The constant in the Java programming language
   * that identifies the generic SQL value
   * <code>NULL</code>.
   */
  public static NULL = 0;

  /**
   * The constant in the Java programming language that indicates
   * that the SQL type is database-specific and
   * gets mapped to a Java object that can be accessed via
   * the methods <code>getObject</code> and <code>setObject</code>.
   */
  public static OTHER = 1111;



  /**
   * The constant in the Java programming language, sometimes referred to
   * as a type code, that identifies the generic SQL type
   * <code>JAVA_OBJECT</code>.
   * @since 1.2
   */
  public static JAVA_OBJECT = 2000;

  /**
   * The constant in the Java programming language, sometimes referred to
   * as a type code, that identifies the generic SQL type
   * <code>DISTINCT</code>.
   * @since 1.2
   */
  public static DISTINCT = 2001;

  /**
   * The constant in the Java programming language, sometimes referred to
   * as a type code, that identifies the generic SQL type
   * <code>STRUCT</code>.
   * @since 1.2
   */
  public static STRUCT = 2002;

  /**
   * The constant in the Java programming language, sometimes referred to
   * as a type code, that identifies the generic SQL type
   * <code>ARRAY</code>.
   * @since 1.2
   */
  public static ARRAY = 2003;

  /**
   * The constant in the Java programming language, sometimes referred to
   * as a type code, that identifies the generic SQL type
   * <code>BLOB</code>.
   * @since 1.2
   */
  public static BLOB = 2004;

  /**
   * The constant in the Java programming language, sometimes referred to
   * as a type code, that identifies the generic SQL type
   * <code>CLOB</code>.
   * @since 1.2
   */
  public static CLOB = 2005;

  /**
   * The constant in the Java programming language, sometimes referred to
   * as a type code, that identifies the generic SQL type
   * <code>REF</code>.
   * @since 1.2
   */
  public static REF = 2006;

  /**
   * The constant in the Java programming language, somtimes referred to
   * as a type code, that identifies the generic SQL type <code>DATALINK</code>.
   *
   * @since 1.4
   */
  public static DATALINK = 70;

  /**
   * The constant in the Java programming language, somtimes referred to
   * as a type code, that identifies the generic SQL type <code>BOOLEAN</code>.
   *
   * @since 1.4
   */
  public static BOOLEAN = 16;

  //------------------------- JDBC 4.0 -----------------------------------

  /**
   * The constant in the Java programming language, sometimes referred to
   * as a type code, that identifies the generic SQL type <code>ROWID</code>
   *
   * @since 1.6
   *
   */
  public static ROWID = -8;

  /**
   * The constant in the Java programming language, sometimes referred to
   * as a type code, that identifies the generic SQL type <code>NCHAR</code>
   *
   * @since 1.6
   */
  public static NCHAR = -15;

  /**
   * The constant in the Java programming language, sometimes referred to
   * as a type code, that identifies the generic SQL type <code>NVARCHAR</code>.
   *
   * @since 1.6
   */
  public static NVARCHAR = -9;

  /**
   * The constant in the Java programming language, sometimes referred to
   * as a type code, that identifies the generic SQL type <code>LONGNVARCHAR</code>.
   *
   * @since 1.6
   */
  public static LONGNVARCHAR = -16;

  /**
   * The constant in the Java programming language, sometimes referred to
   * as a type code, that identifies the generic SQL type <code>NCLOB</code>.
   *
   * @since 1.6
   */
  public static NCLOB = 2011;

  /**
   * The constant in the Java programming language, sometimes referred to
   * as a type code, that identifies the generic SQL type <code>XML</code>.
   *
   * @since 1.6
   */
  public static SQLXML = 2009;

  public static getSQLTypeValue(type: string): number {
    let value;
    type = type ? type.toUpperCase() : '';
    switch (type) {
      case 'BIT':
        value = SQLTypes.BIT;
        break;
      case 'TINYINT':
        value = SQLTypes.TINYINT;
        break;
      case 'SMALLINT':
        value = SQLTypes.SMALLINT;
        break;
      case 'INTEGER':
        value = SQLTypes.INTEGER;
        break;
      case 'BIGINT':
        value = SQLTypes.BIGINT;
        break;
      case 'FLOAT':
        value = SQLTypes.FLOAT;
        break;
      case 'REAL':
        value = SQLTypes.REAL;
        break;
      case 'DOUBLE':
        value = SQLTypes.DOUBLE;
        break;
      case 'NUMERIC':
        value = SQLTypes.NUMERIC;
        break;
      case 'DECIMAL':
        value = SQLTypes.DECIMAL;
        break;
      case 'CHAR':
        value = SQLTypes.CHAR;
        break;
      case 'VARCHAR':
        value = SQLTypes.VARCHAR;
        break;
      case 'LONGVARCHAR':
        value = SQLTypes.LONGVARCHAR;
        break;
      case 'DATE':
        value = SQLTypes.DATE;
        break;
      case 'TIME':
        value = SQLTypes.TIME;
        break;
      case 'TIMESTAMP':
        value = SQLTypes.TIMESTAMP;
        break;
      case 'BINARY':
        value = SQLTypes.BINARY;
        break;
      case 'VARBINARY':
        value = SQLTypes.VARBINARY;
        break;
      case 'LONGVARBINARY':
        value = SQLTypes.LONGVARBINARY;
        break;
      case 'NULL':
        value = SQLTypes.NULL;
        break;
      case 'OTHER':
        value = SQLTypes.OTHER;
        break;
      case 'JAVA_OBJECT':
        value = SQLTypes.JAVA_OBJECT;
        break;
      case 'DISTINCT':
        value = SQLTypes.DISTINCT;
        break;
      case 'STRUCT':
        value = SQLTypes.STRUCT;
        break;
      case 'ARRAY':
        value = SQLTypes.ARRAY;
        break;
      case 'BLOB':
        value = SQLTypes.BLOB;
        break;
      case 'CLOB':
        value = SQLTypes.CLOB;
        break;
      case 'REF':
        value = SQLTypes.REF;
        break;
      case 'DATALINK':
        value = SQLTypes.DATALINK;
        break;
      case 'BOOLEAN':
        value = SQLTypes.BOOLEAN;
        break;
      case 'ROWID':
        value = SQLTypes.ROWID;
        break;
      case 'NCHAR':
        value = SQLTypes.NCHAR;
        break;
      case 'NVARCHAR':
        value = SQLTypes.NVARCHAR;
        break;
      case 'LONGNVARCHAR':
        value = SQLTypes.LONGNVARCHAR;
        break;
      case 'NCLOB':
        value = SQLTypes.NCLOB;
        break;
      case 'SQLXML':
        value = SQLTypes.SQLXML;
        break;
      default:
        value = SQLTypes.OTHER;
        break;
    }
    return value;
  }

  public static parseUsingSQLType(arg: any, type: string): any {
    let value = arg;
    type = type ? type.toUpperCase() : '';
    try {
      switch (type) {
        case 'TINYINT':
        case 'SMALLINT':
        case 'INTEGER':
        case 'BIGINT':
          value = parseInt(arg);
          break;
        case 'FLOAT':
        case 'REAL':
        case 'DOUBLE':
        case 'NUMERIC':
        case 'DECIMAL':
          value = parseFloat(arg);
        default:
          break;
      }
    } catch (err) {
      console.log('SQLTypes.parseUsingSQLType error');
    }
    return value;
  }
}

