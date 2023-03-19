# Medrt


```text
fontawesome-6/Brands/Medrt
```

```text
include('fontawesome-6/Brands/Medrt')
```



| Illustration | Medrt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Medrt.png) | ![illustration for Medrt](../../fontawesome-6/Brands/Medrt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MedrtXs>`
- `<$MedrtSm>`
- `<$MedrtMd>`
- `<$MedrtLg>`





## Medrt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Medrt
include('fontawesome-6/Brands/Medrt')

' renders the element
Medrt('Medrt', 'Medrt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Medrt
include('fontawesome-6/Brands/Medrt')

' renders the element
Medrt('Medrt', 'Medrt', 'an optional tech label', 'an optional description')
@enduml
```

