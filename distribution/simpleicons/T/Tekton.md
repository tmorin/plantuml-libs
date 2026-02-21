# Tekton


```text
simpleicons/T/Tekton
```

```text
include('simpleicons/T/Tekton')
```



| Illustration | Tekton |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Tekton.png) | ![illustration for Tekton](../../simpleicons/T/Tekton.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TektonXs>`
- `<$TektonSm>`
- `<$TektonMd>`
- `<$TektonLg>`





## Tekton

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Tekton
include('simpleicons/T/Tekton')

' renders the element
Tekton('Tekton', 'Tekton', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tekton
include('simpleicons/T/Tekton')

' renders the element
Tekton('Tekton', 'Tekton', 'an optional tech label', 'an optional description')
@enduml
```

