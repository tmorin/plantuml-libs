# Nunjucks


```text
simpleicons/N/Nunjucks
```

```text
include('simpleicons/N/Nunjucks')
```



| Illustration | Nunjucks |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Nunjucks.png) | ![illustration for Nunjucks](../../simpleicons/N/Nunjucks.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NunjucksXs>`
- `<$NunjucksSm>`
- `<$NunjucksMd>`
- `<$NunjucksLg>`





## Nunjucks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Nunjucks
include('simpleicons/N/Nunjucks')

' renders the element
Nunjucks('Nunjucks', 'Nunjucks', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nunjucks
include('simpleicons/N/Nunjucks')

' renders the element
Nunjucks('Nunjucks', 'Nunjucks', 'an optional tech label', 'an optional description')
@enduml
```

