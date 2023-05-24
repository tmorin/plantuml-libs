# Akamai


```text
simpleicons-8/A/Akamai
```

```text
include('simpleicons-8/A/Akamai')
```



| Illustration | Akamai |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Akamai.png) | ![illustration for Akamai](../../simpleicons-8/A/Akamai.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AkamaiXs>`
- `<$AkamaiSm>`
- `<$AkamaiMd>`
- `<$AkamaiLg>`





## Akamai

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Akamai
include('simpleicons-8/A/Akamai')

' renders the element
Akamai('Akamai', 'Akamai', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Akamai
include('simpleicons-8/A/Akamai')

' renders the element
Akamai('Akamai', 'Akamai', 'an optional tech label', 'an optional description')
@enduml
```

