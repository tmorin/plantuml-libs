# Veed


```text
simpleicons-14/V/Veed
```

```text
include('simpleicons-14/V/Veed')
```



| Illustration | Veed |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/V/Veed.png) | ![illustration for Veed](../../simpleicons-14/V/Veed.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VeedXs>`
- `<$VeedSm>`
- `<$VeedMd>`
- `<$VeedLg>`





## Veed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Veed
include('simpleicons-14/V/Veed')

' renders the element
Veed('Veed', 'Veed', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Veed
include('simpleicons-14/V/Veed')

' renders the element
Veed('Veed', 'Veed', 'an optional tech label', 'an optional description')
@enduml
```

