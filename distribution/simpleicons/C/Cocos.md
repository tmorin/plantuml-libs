# Cocos


```text
simpleicons/C/Cocos
```

```text
include('simpleicons/C/Cocos')
```



| Illustration | Cocos |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Cocos.png) | ![illustration for Cocos](../../simpleicons/C/Cocos.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CocosXs>`
- `<$CocosSm>`
- `<$CocosMd>`
- `<$CocosLg>`





## Cocos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Cocos
include('simpleicons/C/Cocos')

' renders the element
Cocos('Cocos', 'Cocos', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cocos
include('simpleicons/C/Cocos')

' renders the element
Cocos('Cocos', 'Cocos', 'an optional tech label', 'an optional description')
@enduml
```

