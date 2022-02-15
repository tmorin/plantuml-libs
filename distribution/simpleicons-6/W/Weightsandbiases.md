# Weightsandbiases


```text
simpleicons-6/W/Weightsandbiases
```

```text
include('simpleicons-6/W/Weightsandbiases')
```



| Illustration | Weightsandbiases |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/W/Weightsandbiases.png) | ![illustration for Weightsandbiases](../../simpleicons-6/W/Weightsandbiases.Local.png) |




## Weightsandbiases

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Weightsandbiases
include('simpleicons-6/W/Weightsandbiases')

' renders the element
Weightsandbiases('Weightsandbiases', 'Weightsandbiases', 'an optional tech label')
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

' loads the Item which embeds the element Weightsandbiases
include('simpleicons-6/W/Weightsandbiases')

' renders the element
Weightsandbiases('Weightsandbiases', 'Weightsandbiases', 'an optional tech label')
@enduml
```

