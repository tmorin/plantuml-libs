# Decapcms


```text
simpleicons-14/D/Decapcms
```

```text
include('simpleicons-14/D/Decapcms')
```



| Illustration | Decapcms |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Decapcms.png) | ![illustration for Decapcms](../../simpleicons-14/D/Decapcms.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DecapcmsXs>`
- `<$DecapcmsSm>`
- `<$DecapcmsMd>`
- `<$DecapcmsLg>`





## Decapcms

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Decapcms
include('simpleicons-14/D/Decapcms')

' renders the element
Decapcms('Decapcms', 'Decapcms', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Decapcms
include('simpleicons-14/D/Decapcms')

' renders the element
Decapcms('Decapcms', 'Decapcms', 'an optional tech label', 'an optional description')
@enduml
```

