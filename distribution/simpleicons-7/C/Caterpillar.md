# Caterpillar


```text
simpleicons-7/C/Caterpillar
```

```text
include('simpleicons-7/C/Caterpillar')
```



| Illustration | Caterpillar |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Caterpillar.png) | ![illustration for Caterpillar](../../simpleicons-7/C/Caterpillar.Local.png) |




## Caterpillar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Caterpillar
include('simpleicons-7/C/Caterpillar')

' renders the element
Caterpillar('Caterpillar', 'Caterpillar', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Caterpillar
include('simpleicons-7/C/Caterpillar')

' renders the element
Caterpillar('Caterpillar', 'Caterpillar', 'an optional tech label', 'an optional description')
@enduml
```

