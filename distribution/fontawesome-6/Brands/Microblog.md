# Microblog


```text
fontawesome-6/Brands/Microblog
```

```text
include('fontawesome-6/Brands/Microblog')
```



| Illustration | Microblog |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Microblog.png) | ![illustration for Microblog](../../fontawesome-6/Brands/Microblog.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Microblog
include('fontawesome-6/Brands/Microblog')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Microblog
include('fontawesome-6/Brands/Microblog')

' renders the element
Microblog('Microblog', 'Microblog', 'an optional tech label', 'an optional description')
@enduml
```

