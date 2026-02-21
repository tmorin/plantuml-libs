# Artstation


```text
fontawesome/Brands/Artstation
```

```text
include('fontawesome/Brands/Artstation')
```



| Illustration | Artstation |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Artstation.png) | ![illustration for Artstation](../../fontawesome/Brands/Artstation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArtstationXs>`
- `<$ArtstationSm>`
- `<$ArtstationMd>`
- `<$ArtstationLg>`





## Artstation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Artstation
include('fontawesome/Brands/Artstation')

' renders the element
Artstation('Artstation', 'Artstation', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Artstation
include('fontawesome/Brands/Artstation')

' renders the element
Artstation('Artstation', 'Artstation', 'an optional tech label', 'an optional description')
@enduml
```

