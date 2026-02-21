# Scrapy


```text
simpleicons-14/S/Scrapy
```

```text
include('simpleicons-14/S/Scrapy')
```



| Illustration | Scrapy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Scrapy.png) | ![illustration for Scrapy](../../simpleicons-14/S/Scrapy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ScrapyXs>`
- `<$ScrapySm>`
- `<$ScrapyMd>`
- `<$ScrapyLg>`





## Scrapy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Scrapy
include('simpleicons-14/S/Scrapy')

' renders the element
Scrapy('Scrapy', 'Scrapy', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Scrapy
include('simpleicons-14/S/Scrapy')

' renders the element
Scrapy('Scrapy', 'Scrapy', 'an optional tech label', 'an optional description')
@enduml
```

