# Skype


```text
simpleicons-14/S/Skype
```

```text
include('simpleicons-14/S/Skype')
```



| Illustration | Skype |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Skype.png) | ![illustration for Skype](../../simpleicons-14/S/Skype.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SkypeXs>`
- `<$SkypeSm>`
- `<$SkypeMd>`
- `<$SkypeLg>`





## Skype

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Skype
include('simpleicons-14/S/Skype')

' renders the element
Skype('Skype', 'Skype', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Skype
include('simpleicons-14/S/Skype')

' renders the element
Skype('Skype', 'Skype', 'an optional tech label', 'an optional description')
@enduml
```

