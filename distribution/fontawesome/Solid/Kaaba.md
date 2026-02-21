# Kaaba


```text
fontawesome/Solid/Kaaba
```

```text
include('fontawesome/Solid/Kaaba')
```



| Illustration | Kaaba |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Kaaba.png) | ![illustration for Kaaba](../../fontawesome/Solid/Kaaba.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KaabaXs>`
- `<$KaabaSm>`
- `<$KaabaMd>`
- `<$KaabaLg>`





## Kaaba

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Kaaba
include('fontawesome/Solid/Kaaba')

' renders the element
Kaaba('Kaaba', 'Kaaba', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kaaba
include('fontawesome/Solid/Kaaba')

' renders the element
Kaaba('Kaaba', 'Kaaba', 'an optional tech label', 'an optional description')
@enduml
```

