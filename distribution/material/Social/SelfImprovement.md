# SelfImprovement


```text
material/Social/SelfImprovement
```

```text
include('material/Social/SelfImprovement')
```



| Illustration | SelfImprovement |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/SelfImprovement.png) | ![illustration for SelfImprovement](../../material/Social/SelfImprovement.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SelfImprovementXs>`
- `<$SelfImprovementSm>`
- `<$SelfImprovementMd>`
- `<$SelfImprovementLg>`





## SelfImprovement

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SelfImprovement
include('material/Social/SelfImprovement')

' renders the element
SelfImprovement('SelfImprovement', 'Self Improvement', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element SelfImprovement
include('material/Social/SelfImprovement')

' renders the element
SelfImprovement('SelfImprovement', 'Self Improvement', 'an optional tech label', 'an optional description')
@enduml
```

