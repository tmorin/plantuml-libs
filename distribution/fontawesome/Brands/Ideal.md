# Ideal


```text
fontawesome/Brands/Ideal
```

```text
include('fontawesome/Brands/Ideal')
```



| Illustration | Ideal |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Ideal.png) | ![illustration for Ideal](../../fontawesome/Brands/Ideal.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IdealXs>`
- `<$IdealSm>`
- `<$IdealMd>`
- `<$IdealLg>`





## Ideal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Ideal
include('fontawesome/Brands/Ideal')

' renders the element
Ideal('Ideal', 'Ideal', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ideal
include('fontawesome/Brands/Ideal')

' renders the element
Ideal('Ideal', 'Ideal', 'an optional tech label', 'an optional description')
@enduml
```

