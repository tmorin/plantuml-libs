# Cocos


```text
simpleicons-5/C/Cocos
```

```text
include('simpleicons-5/C/Cocos')
```



| Illustration | Cocos |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Cocos.png) | ![illustration for Cocos](../../simpleicons-5/C/Cocos.Local.png) |




## Cocos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Cocos
include('simpleicons-5/C/Cocos')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Cocos
include('simpleicons-5/C/Cocos')

' renders the element
Cocos('Cocos', 'Cocos', 'an optional tech label')
@enduml
```

