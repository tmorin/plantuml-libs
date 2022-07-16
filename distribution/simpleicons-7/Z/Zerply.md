# Zerply


```text
simpleicons-7/Z/Zerply
```

```text
include('simpleicons-7/Z/Zerply')
```



| Illustration | Zerply |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/Z/Zerply.png) | ![illustration for Zerply](../../simpleicons-7/Z/Zerply.Local.png) |




## Zerply

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Zerply
include('simpleicons-7/Z/Zerply')

' renders the element
Zerply('Zerply', 'Zerply', 'an optional tech label')
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

' loads the Item which embeds the element Zerply
include('simpleicons-7/Z/Zerply')

' renders the element
Zerply('Zerply', 'Zerply', 'an optional tech label')
@enduml
```

