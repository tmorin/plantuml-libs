# Xiaomi


```text
simpleicons-6/X/Xiaomi
```

```text
include('simpleicons-6/X/Xiaomi')
```



| Illustration | Xiaomi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/X/Xiaomi.png) | ![illustration for Xiaomi](../../simpleicons-6/X/Xiaomi.Local.png) |




## Xiaomi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Xiaomi
include('simpleicons-6/X/Xiaomi')

' renders the element
Xiaomi('Xiaomi', 'Xiaomi', 'an optional tech label')
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

' loads the Item which embeds the element Xiaomi
include('simpleicons-6/X/Xiaomi')

' renders the element
Xiaomi('Xiaomi', 'Xiaomi', 'an optional tech label')
@enduml
```

