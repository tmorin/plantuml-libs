# Osi


```text
fontawesome-6/Brands/Osi
```

```text
include('fontawesome-6/Brands/Osi')
```



| Illustration | Osi |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Osi.png) | ![illustration for Osi](../../fontawesome-6/Brands/Osi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OsiXs>`
- `<$OsiSm>`
- `<$OsiMd>`
- `<$OsiLg>`





## Osi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Osi
include('fontawesome-6/Brands/Osi')

' renders the element
Osi('Osi', 'Osi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Osi
include('fontawesome-6/Brands/Osi')

' renders the element
Osi('Osi', 'Osi', 'an optional tech label', 'an optional description')
@enduml
```

