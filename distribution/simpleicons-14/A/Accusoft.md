# Accusoft


```text
simpleicons-14/A/Accusoft
```

```text
include('simpleicons-14/A/Accusoft')
```



| Illustration | Accusoft |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Accusoft.png) | ![illustration for Accusoft](../../simpleicons-14/A/Accusoft.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AccusoftXs>`
- `<$AccusoftSm>`
- `<$AccusoftMd>`
- `<$AccusoftLg>`





## Accusoft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Accusoft
include('simpleicons-14/A/Accusoft')

' renders the element
Accusoft('Accusoft', 'Accusoft', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Accusoft
include('simpleicons-14/A/Accusoft')

' renders the element
Accusoft('Accusoft', 'Accusoft', 'an optional tech label', 'an optional description')
@enduml
```

