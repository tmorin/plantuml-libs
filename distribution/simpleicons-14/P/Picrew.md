# Picrew


```text
simpleicons-14/P/Picrew
```

```text
include('simpleicons-14/P/Picrew')
```



| Illustration | Picrew |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Picrew.png) | ![illustration for Picrew](../../simpleicons-14/P/Picrew.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PicrewXs>`
- `<$PicrewSm>`
- `<$PicrewMd>`
- `<$PicrewLg>`





## Picrew

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Picrew
include('simpleicons-14/P/Picrew')

' renders the element
Picrew('Picrew', 'Picrew', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Picrew
include('simpleicons-14/P/Picrew')

' renders the element
Picrew('Picrew', 'Picrew', 'an optional tech label', 'an optional description')
@enduml
```

