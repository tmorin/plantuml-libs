# Microblog


```text
fontawesome/Brands/Microblog
```

```text
include('fontawesome/Brands/Microblog')
```



| Illustration | Microblog |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Microblog.png) | ![illustration for Microblog](../../fontawesome/Brands/Microblog.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MicroblogXs>`
- `<$MicroblogSm>`
- `<$MicroblogMd>`
- `<$MicroblogLg>`





## Microblog

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Microblog
include('fontawesome/Brands/Microblog')

' renders the element
Microblog('Microblog', 'Microblog', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Microblog
include('fontawesome/Brands/Microblog')

' renders the element
Microblog('Microblog', 'Microblog', 'an optional tech label', 'an optional description')
@enduml
```

