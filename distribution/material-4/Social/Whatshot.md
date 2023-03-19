# Whatshot


```text
material-4/Social/Whatshot
```

```text
include('material-4/Social/Whatshot')
```



| Illustration | Whatshot |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/Whatshot.png) | ![illustration for Whatshot](../../material-4/Social/Whatshot.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WhatshotXs>`
- `<$WhatshotSm>`
- `<$WhatshotMd>`
- `<$WhatshotLg>`





## Whatshot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Whatshot
include('material-4/Social/Whatshot')

' renders the element
Whatshot('Whatshot', 'Whatshot', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Whatshot
include('material-4/Social/Whatshot')

' renders the element
Whatshot('Whatshot', 'Whatshot', 'an optional tech label', 'an optional description')
@enduml
```

