# Percentage


```text
fontawesome/Solid/Percentage
```

```text
include('fontawesome/Solid/Percentage')
```



| Illustration | Percentage |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Percentage.png) | ![illustration for Percentage](../../fontawesome/Solid/Percentage.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PercentageXs>`
- `<$PercentageSm>`
- `<$PercentageMd>`
- `<$PercentageLg>`





## Percentage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Percentage
include('fontawesome/Solid/Percentage')

' renders the element
Percentage('Percentage', 'Percentage', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Percentage
include('fontawesome/Solid/Percentage')

' renders the element
Percentage('Percentage', 'Percentage', 'an optional tech label', 'an optional description')
@enduml
```

