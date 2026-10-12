# Tencenthy


```text
simpleicons/T/Tencenthy
```

```text
include('simpleicons/T/Tencenthy')
```



| Illustration | Tencenthy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Tencenthy.png) | ![illustration for Tencenthy](../../simpleicons/T/Tencenthy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TencenthyXs>`
- `<$TencenthySm>`
- `<$TencenthyMd>`
- `<$TencenthyLg>`





## Tencenthy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Tencenthy
include('simpleicons/T/Tencenthy')

' renders the element
Tencenthy('Tencenthy', 'Tencenthy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tencenthy
include('simpleicons/T/Tencenthy')

' renders the element
Tencenthy('Tencenthy', 'Tencenthy', 'an optional tech label', 'an optional description')
@enduml
```

