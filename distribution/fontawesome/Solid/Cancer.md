# Cancer


```text
fontawesome/Solid/Cancer
```

```text
include('fontawesome/Solid/Cancer')
```



| Illustration | Cancer |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Cancer.png) | ![illustration for Cancer](../../fontawesome/Solid/Cancer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CancerXs>`
- `<$CancerSm>`
- `<$CancerMd>`
- `<$CancerLg>`





## Cancer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Cancer
include('fontawesome/Solid/Cancer')

' renders the element
Cancer('Cancer', 'Cancer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cancer
include('fontawesome/Solid/Cancer')

' renders the element
Cancer('Cancer', 'Cancer', 'an optional tech label', 'an optional description')
@enduml
```

