# Usps


```text
fontawesome-6/Brands/Usps
```

```text
include('fontawesome-6/Brands/Usps')
```



| Illustration | Usps |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Usps.png) | ![illustration for Usps](../../fontawesome-6/Brands/Usps.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UspsXs>`
- `<$UspsSm>`
- `<$UspsMd>`
- `<$UspsLg>`





## Usps

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Usps
include('fontawesome-6/Brands/Usps')

' renders the element
Usps('Usps', 'Usps', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Usps
include('fontawesome-6/Brands/Usps')

' renders the element
Usps('Usps', 'Usps', 'an optional tech label', 'an optional description')
@enduml
```

