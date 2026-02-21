# Uber


```text
fontawesome/Brands/Uber
```

```text
include('fontawesome/Brands/Uber')
```



| Illustration | Uber |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Uber.png) | ![illustration for Uber](../../fontawesome/Brands/Uber.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UberXs>`
- `<$UberSm>`
- `<$UberMd>`
- `<$UberLg>`





## Uber

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Uber
include('fontawesome/Brands/Uber')

' renders the element
Uber('Uber', 'Uber', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Uber
include('fontawesome/Brands/Uber')

' renders the element
Uber('Uber', 'Uber', 'an optional tech label', 'an optional description')
@enduml
```

