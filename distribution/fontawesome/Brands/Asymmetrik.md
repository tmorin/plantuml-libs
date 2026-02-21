# Asymmetrik


```text
fontawesome/Brands/Asymmetrik
```

```text
include('fontawesome/Brands/Asymmetrik')
```



| Illustration | Asymmetrik |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Asymmetrik.png) | ![illustration for Asymmetrik](../../fontawesome/Brands/Asymmetrik.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AsymmetrikXs>`
- `<$AsymmetrikSm>`
- `<$AsymmetrikMd>`
- `<$AsymmetrikLg>`





## Asymmetrik

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Asymmetrik
include('fontawesome/Brands/Asymmetrik')

' renders the element
Asymmetrik('Asymmetrik', 'Asymmetrik', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Asymmetrik
include('fontawesome/Brands/Asymmetrik')

' renders the element
Asymmetrik('Asymmetrik', 'Asymmetrik', 'an optional tech label', 'an optional description')
@enduml
```

