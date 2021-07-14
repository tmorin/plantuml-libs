# Floatplane


```text
simpleicons-5/F/Floatplane
```

```text
include('simpleicons-5/F/Floatplane')
```



| Illustration | Floatplane |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Floatplane.png) | ![illustration for Floatplane](../../simpleicons-5/F/Floatplane.Local.png) |




## Floatplane

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Floatplane
include('simpleicons-5/F/Floatplane')

' renders the element
Floatplane('Floatplane', 'Floatplane', 'an optional tech label')
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

' loads the Item which embeds the element Floatplane
include('simpleicons-5/F/Floatplane')

' renders the element
Floatplane('Floatplane', 'Floatplane', 'an optional tech label')
@enduml
```

