# Scala


```text
simpleicons-14/S/Scala
```

```text
include('simpleicons-14/S/Scala')
```



| Illustration | Scala |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Scala.png) | ![illustration for Scala](../../simpleicons-14/S/Scala.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ScalaXs>`
- `<$ScalaSm>`
- `<$ScalaMd>`
- `<$ScalaLg>`





## Scala

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Scala
include('simpleicons-14/S/Scala')

' renders the element
Scala('Scala', 'Scala', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Scala
include('simpleicons-14/S/Scala')

' renders the element
Scala('Scala', 'Scala', 'an optional tech label', 'an optional description')
@enduml
```

