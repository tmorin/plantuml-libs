# Cline


```text
simpleicons/C/Cline
```

```text
include('simpleicons/C/Cline')
```



| Illustration | Cline |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Cline.png) | ![illustration for Cline](../../simpleicons/C/Cline.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ClineXs>`
- `<$ClineSm>`
- `<$ClineMd>`
- `<$ClineLg>`





## Cline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Cline
include('simpleicons/C/Cline')

' renders the element
Cline('Cline', 'Cline', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Cline
include('simpleicons/C/Cline')

' renders the element
Cline('Cline', 'Cline', 'an optional tech label', 'an optional description')
@enduml
```

