# Groups


```text
material/Social/Groups
```

```text
include('material/Social/Groups')
```



| Illustration | Groups |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/Groups.png) | ![illustration for Groups](../../material/Social/Groups.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GroupsXs>`
- `<$GroupsSm>`
- `<$GroupsMd>`
- `<$GroupsLg>`





## Groups

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Groups
include('material/Social/Groups')

' renders the element
Groups('Groups', 'Groups', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Groups
include('material/Social/Groups')

' renders the element
Groups('Groups', 'Groups', 'an optional tech label', 'an optional description')
@enduml
```

