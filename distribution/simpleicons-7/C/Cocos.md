# Cocos


```text
simpleicons-7/C/Cocos
```

```text
include('simpleicons-7/C/Cocos')
```



| Illustration | Cocos |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Cocos.png) | ![illustration for Cocos](../../simpleicons-7/C/Cocos.Local.png) |




## Cocos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Cocos
include('simpleicons-7/C/Cocos')

' renders the element
Cocos('Cocos', 'Cocos', 'an optional tech label')
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

' loads the Item which embeds the element Cocos
include('simpleicons-7/C/Cocos')

' renders the element
Cocos('Cocos', 'Cocos', 'an optional tech label')
@enduml
```

