# SportsMma


```text
material/Social/SportsMma
```

```text
include('material/Social/SportsMma')
```



| Illustration | SportsMma |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/SportsMma.png) | ![illustration for SportsMma](../../material/Social/SportsMma.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SportsMmaXs>`
- `<$SportsMmaSm>`
- `<$SportsMmaMd>`
- `<$SportsMmaLg>`





## SportsMma

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SportsMma
include('material/Social/SportsMma')

' renders the element
SportsMma('SportsMma', 'Sports Mma', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SportsMma
include('material/Social/SportsMma')

' renders the element
SportsMma('SportsMma', 'Sports Mma', 'an optional tech label', 'an optional description')
@enduml
```

