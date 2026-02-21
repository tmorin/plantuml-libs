# Pages


```text
material/Social/Pages
```

```text
include('material/Social/Pages')
```



| Illustration | Pages |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/Pages.png) | ![illustration for Pages](../../material/Social/Pages.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PagesXs>`
- `<$PagesSm>`
- `<$PagesMd>`
- `<$PagesLg>`





## Pages

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Pages
include('material/Social/Pages')

' renders the element
Pages('Pages', 'Pages', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pages
include('material/Social/Pages')

' renders the element
Pages('Pages', 'Pages', 'an optional tech label', 'an optional description')
@enduml
```

