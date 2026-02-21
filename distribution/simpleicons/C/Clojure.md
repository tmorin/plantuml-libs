# Clojure


```text
simpleicons/C/Clojure
```

```text
include('simpleicons/C/Clojure')
```



| Illustration | Clojure |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Clojure.png) | ![illustration for Clojure](../../simpleicons/C/Clojure.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ClojureXs>`
- `<$ClojureSm>`
- `<$ClojureMd>`
- `<$ClojureLg>`





## Clojure

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Clojure
include('simpleicons/C/Clojure')

' renders the element
Clojure('Clojure', 'Clojure', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Clojure
include('simpleicons/C/Clojure')

' renders the element
Clojure('Clojure', 'Clojure', 'an optional tech label', 'an optional description')
@enduml
```

