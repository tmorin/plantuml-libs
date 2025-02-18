# Target


```text
simpleicons-14/T/Target
```

```text
include('simpleicons-14/T/Target')
```



| Illustration | Target |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Target.png) | ![illustration for Target](../../simpleicons-14/T/Target.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TargetXs>`
- `<$TargetSm>`
- `<$TargetMd>`
- `<$TargetLg>`





## Target

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Target
include('simpleicons-14/T/Target')

' renders the element
Target('Target', 'Target', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Target
include('simpleicons-14/T/Target')

' renders the element
Target('Target', 'Target', 'an optional tech label', 'an optional description')
@enduml
```

