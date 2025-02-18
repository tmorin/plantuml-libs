# Creativetechnology


```text
simpleicons-14/C/Creativetechnology
```

```text
include('simpleicons-14/C/Creativetechnology')
```



| Illustration | Creativetechnology |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Creativetechnology.png) | ![illustration for Creativetechnology](../../simpleicons-14/C/Creativetechnology.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CreativetechnologyXs>`
- `<$CreativetechnologySm>`
- `<$CreativetechnologyMd>`
- `<$CreativetechnologyLg>`





## Creativetechnology

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Creativetechnology
include('simpleicons-14/C/Creativetechnology')

' renders the element
Creativetechnology('Creativetechnology', 'Creativetechnology', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Creativetechnology
include('simpleicons-14/C/Creativetechnology')

' renders the element
Creativetechnology('Creativetechnology', 'Creativetechnology', 'an optional tech label', 'an optional description')
@enduml
```

