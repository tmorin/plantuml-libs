# Yii


```text
simpleicons-14/Y/Yii
```

```text
include('simpleicons-14/Y/Yii')
```



| Illustration | Yii |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Y/Yii.png) | ![illustration for Yii](../../simpleicons-14/Y/Yii.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$YiiXs>`
- `<$YiiSm>`
- `<$YiiMd>`
- `<$YiiLg>`





## Yii

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Yii
include('simpleicons-14/Y/Yii')

' renders the element
Yii('Yii', 'Yii', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Yii
include('simpleicons-14/Y/Yii')

' renders the element
Yii('Yii', 'Yii', 'an optional tech label', 'an optional description')
@enduml
```

