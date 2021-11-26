# Clojure


```text
simpleicons-5/C/Clojure
```

```text
include('simpleicons-5/C/Clojure')
```



| Illustration | Clojure |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Clojure.png) | ![illustration for Clojure](../../simpleicons-5/C/Clojure.Local.png) |




## Clojure

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Clojure
include('simpleicons-5/C/Clojure')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Clojure
include('simpleicons-5/C/Clojure')

' renders the element
Clojure('Clojure', 'Clojure', 'an optional tech label')
@enduml
```

