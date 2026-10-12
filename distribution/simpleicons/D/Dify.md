# Dify


```text
simpleicons/D/Dify
```

```text
include('simpleicons/D/Dify')
```



| Illustration | Dify |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Dify.png) | ![illustration for Dify](../../simpleicons/D/Dify.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DifyXs>`
- `<$DifySm>`
- `<$DifyMd>`
- `<$DifyLg>`





## Dify

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Dify
include('simpleicons/D/Dify')

' renders the element
Dify('Dify', 'Dify', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dify
include('simpleicons/D/Dify')

' renders the element
Dify('Dify', 'Dify', 'an optional tech label', 'an optional description')
@enduml
```

