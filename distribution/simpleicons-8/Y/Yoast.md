# Yoast


```text
simpleicons-8/Y/Yoast
```

```text
include('simpleicons-8/Y/Yoast')
```



| Illustration | Yoast |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/Y/Yoast.png) | ![illustration for Yoast](../../simpleicons-8/Y/Yoast.Local.png) |




## Yoast

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Yoast
include('simpleicons-8/Y/Yoast')

' renders the element
Yoast('Yoast', 'Yoast', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Yoast
include('simpleicons-8/Y/Yoast')

' renders the element
Yoast('Yoast', 'Yoast', 'an optional tech label', 'an optional description')
@enduml
```

