# Ideal


```text
fontawesome-6/Brands/Ideal
```

```text
include('fontawesome-6/Brands/Ideal')
```



| Illustration | Ideal |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Ideal.png) | ![illustration for Ideal](../../fontawesome-6/Brands/Ideal.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Ideal
include('fontawesome-6/Brands/Ideal')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Ideal
include('fontawesome-6/Brands/Ideal')

' renders the element
Ideal('Ideal', 'Ideal', 'an optional tech label', 'an optional description')
@enduml
```

