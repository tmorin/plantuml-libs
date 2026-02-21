# Cheerio


```text
simpleicons/C/Cheerio
```

```text
include('simpleicons/C/Cheerio')
```



| Illustration | Cheerio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Cheerio.png) | ![illustration for Cheerio](../../simpleicons/C/Cheerio.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CheerioXs>`
- `<$CheerioSm>`
- `<$CheerioMd>`
- `<$CheerioLg>`





## Cheerio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Cheerio
include('simpleicons/C/Cheerio')

' renders the element
Cheerio('Cheerio', 'Cheerio', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Cheerio
include('simpleicons/C/Cheerio')

' renders the element
Cheerio('Cheerio', 'Cheerio', 'an optional tech label', 'an optional description')
@enduml
```

