# Researchgate


```text
fontawesome/Brands/Researchgate
```

```text
include('fontawesome/Brands/Researchgate')
```



| Illustration | Researchgate |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Researchgate.png) | ![illustration for Researchgate](../../fontawesome/Brands/Researchgate.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ResearchgateXs>`
- `<$ResearchgateSm>`
- `<$ResearchgateMd>`
- `<$ResearchgateLg>`





## Researchgate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Researchgate
include('fontawesome/Brands/Researchgate')

' renders the element
Researchgate('Researchgate', 'Researchgate', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Researchgate
include('fontawesome/Brands/Researchgate')

' renders the element
Researchgate('Researchgate', 'Researchgate', 'an optional tech label', 'an optional description')
@enduml
```

