# Freenet


```text
simpleicons-14/F/Freenet
```

```text
include('simpleicons-14/F/Freenet')
```



| Illustration | Freenet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Freenet.png) | ![illustration for Freenet](../../simpleicons-14/F/Freenet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FreenetXs>`
- `<$FreenetSm>`
- `<$FreenetMd>`
- `<$FreenetLg>`





## Freenet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Freenet
include('simpleicons-14/F/Freenet')

' renders the element
Freenet('Freenet', 'Freenet', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Freenet
include('simpleicons-14/F/Freenet')

' renders the element
Freenet('Freenet', 'Freenet', 'an optional tech label', 'an optional description')
@enduml
```

