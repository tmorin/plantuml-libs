# Googlephotos


```text
simpleicons-5/G/Googlephotos
```

```text
include('simpleicons-5/G/Googlephotos')
```



| Illustration | Googlephotos |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Googlephotos.png) | ![illustration for Googlephotos](../../simpleicons-5/G/Googlephotos.Local.png) |




## Googlephotos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Googlephotos
include('simpleicons-5/G/Googlephotos')

' renders the element
Googlephotos('Googlephotos', 'Googlephotos', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Googlephotos
include('simpleicons-5/G/Googlephotos')

' renders the element
Googlephotos('Googlephotos', 'Googlephotos', 'an optional tech label')
@enduml
```

