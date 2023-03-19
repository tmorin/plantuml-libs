# Hugo


```text
simpleicons-8/H/Hugo
```

```text
include('simpleicons-8/H/Hugo')
```



| Illustration | Hugo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/H/Hugo.png) | ![illustration for Hugo](../../simpleicons-8/H/Hugo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HugoXs>`
- `<$HugoSm>`
- `<$HugoMd>`
- `<$HugoLg>`





## Hugo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Hugo
include('simpleicons-8/H/Hugo')

' renders the element
Hugo('Hugo', 'Hugo', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Hugo
include('simpleicons-8/H/Hugo')

' renders the element
Hugo('Hugo', 'Hugo', 'an optional tech label', 'an optional description')
@enduml
```

