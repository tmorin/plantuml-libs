# Clojure


```text
simpleicons-6/C/Clojure
```

```text
include('simpleicons-6/C/Clojure')
```



| Illustration | Clojure |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Clojure.png) | ![illustration for Clojure](../../simpleicons-6/C/Clojure.Local.png) |




## Clojure

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Clojure
include('simpleicons-6/C/Clojure')

' renders the element
Clojure('Clojure', 'Clojure', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Clojure
include('simpleicons-6/C/Clojure')

' renders the element
Clojure('Clojure', 'Clojure', 'an optional tech label')
@enduml
```

